import { supabase } from '@/api/supabaseClient';

const clean = (value) => String(value ?? '').trim();

export async function submitWebsiteEnquiry({
  enquiryType,
  name,
  company,
  email,
  phone = '',
  userCount = '',
  message = '',
}) {
  const payload = {
    enquiryType: clean(enquiryType),
    name: clean(name),
    company: clean(company),
    email: clean(email).toLowerCase(),
    phone: clean(phone),
    userCount: clean(userCount),
    message: clean(message),
  };

  const row = {
    enquiry_type: payload.enquiryType,
    name: payload.name,
    company_name: payload.company,
    email: payload.email,
    phone: payload.phone || null,
    user_count: payload.userCount || null,
    message: payload.message || null,
  };

  const { error } = await supabase
    .from('website_enquiries')
    .insert(row);

  if (error) {
    console.error('Website enquiry insert failed:', error);
    throw error;
  }

  // Notification is deliberately best-effort.
  // A saved customer enquiry must not appear to fail just because email does.
  try {
    const { error: notificationError } = await supabase.functions.invoke(
      'notifyWebsiteEnquiry',
      { body: payload }
    );

    if (notificationError) {
      console.error('Website enquiry notification failed:', notificationError);
    }
  } catch (notificationError) {
    console.error('Website enquiry notification failed:', notificationError);
  }

  return { success: true };
}

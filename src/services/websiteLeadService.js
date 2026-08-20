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
  const row = {
    enquiry_type: clean(enquiryType),
    name: clean(name),
    company: clean(company),
    email: clean(email).toLowerCase(),
    phone: clean(phone) || null,
    user_count: clean(userCount) || null,
    message: clean(message) || null,
  };

  const { data, error } = await supabase
    .from('website_enquiries')
    .insert(row)
    .select('id')
    .single();

  if (error) throw error;
  return data;
}

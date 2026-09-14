import React from 'react';

const Section = ({ title, children }) => (
  <section className="space-y-3">
    <h2 className="font-heading text-xl font-bold text-foreground">{title}</h2>
    <div className="space-y-3 text-sm leading-7 text-muted-foreground sm:text-base">
      {children}
    </div>
  </section>
);

export default function Privacy() {
  return (
    <main className="bg-background">
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
            Privacy & Data Protection
          </p>

          <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground">
            Privacy Policy
          </h1>

          <p className="mt-4 max-w-2xl text-muted-foreground">
            This policy explains how DigiTise360 collects, uses, stores and protects
            personal information across our website, software platform, engineer
            application and related services.
          </p>

          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: 14 September 2026
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl space-y-10 px-4 py-14 sm:px-6 lg:px-8">
        <Section title="1. About DigiTise360">
          <p>
            DigiTise360 (“DigiTise360”, “we”, “us” or “our”) provides software
            for field service, compliance and workforce management.
          </p>

          <p>
            For most information entered into DigiTise360 by a customer
            organisation, that organisation is the data controller and
            DigiTise360 acts as a data processor on its behalf.
          </p>

          <p>
            For information relating to our own website visitors, enquiries,
            account administration, billing and business operations, DigiTise360
            may act as the data controller.
          </p>

          <p>
            Privacy enquiries can be sent to{' '}
            <a
              href="mailto:info@digitise360.com"
              className="font-medium text-primary hover:underline"
            >
              info@digitise360.com
            </a>.
          </p>
        </Section>

        <Section title="2. Information we may collect">
          <p>
            The information processed through DigiTise360 depends on the
            services and features used by each customer organisation.
          </p>

          <p>
            Account and user information may include names, email addresses,
            telephone numbers, employer or company details, user roles, account
            identifiers, company identifiers, authentication information,
            profile information, account activity and security or audit records.
          </p>

          <p>
            Customer, site and job information may include customer names,
            business names, addresses, contact details, site details, job
            descriptions, maintenance records, appointments, engineer notes,
            service history, fault information, quotes, purchase orders,
            invoices and other information required to deliver field services.
          </p>

          <p>
            Workforce information may include engineer assignments, job
            attendance, travel and arrival times, completion times, timesheets,
            availability, expenses, mileage, receipts, training records,
            vehicle assignments and weekly vehicle inspection records.
          </p>
        </Section>

        <Section title="3. Location information">
          <p>
            The DigiTise360 engineer application may collect an engineer's
            device location while the application is being actively used where
            location functionality has been enabled.
          </p>

          <p>
            This may include latitude, longitude and the time of the latest
            location update. Location information may be used by an authorised
            employer or organisation for purposes such as job dispatching,
            workforce coordination and operational management.
          </p>

          <p>
            DigiTise360 does not intend to continuously track engineers while
            the application is closed unless a future feature specifically
            provides this functionality with appropriate disclosures and device
            permissions.
          </p>
        </Section>

        <Section title="4. Photos, documents and signatures">
          <p>
            Users may upload or generate site photographs, job photographs,
            defect photographs, equipment photographs, vehicle photographs,
            expense receipts, certificates, reports, customer signatures,
            engineer signatures, forms, documents and other attachments.
          </p>

          <p>
            Uploaded content may contain personal information depending on the
            information captured or supplied by the user.
          </p>
        </Section>

        <Section title="5. Asbestos survey information">
          <p>
            Where the DigiTise360 asbestos module is used, information may
            include property and site details, survey information, material and
            ACM records, sample information, photographs, laboratory
            certificates, risk assessments, surveyor details, access
            restrictions, recommendations and asbestos survey reports.
          </p>
        </Section>

        <Section title="6. Website enquiries">
          <p>
            When somebody contacts DigiTise360 through our website we may
            collect their name, company, email address, telephone number,
            approximate number of users, enquiry type and message content.
          </p>

          <p>
            We use this information to respond to enquiries, arrange
            demonstrations and provide information about DigiTise360.
          </p>
        </Section>

        <Section title="7. Payments and billing">
          <p>
            Business customers may provide information required to administer
            subscriptions and payments. Payments may be processed by Stripe.
          </p>

          <p>
            DigiTise360 does not normally receive or store full payment card
            details. Payment information is processed by the relevant payment
            provider in accordance with its own privacy and security practices.
          </p>
        </Section>

        <Section title="8. How we use personal information">
          <p>We may use personal information to:</p>

          <ul className="list-disc space-y-2 pl-6">
            <li>provide and operate DigiTise360 services;</li>
            <li>authenticate users and administer accounts;</li>
            <li>manage jobs and field-service workflows;</li>
            <li>assign engineers and staff;</li>
            <li>manage maintenance, inspections and compliance activities;</li>
            <li>create reports, job sheets and certificates;</li>
            <li>manage customer and site records;</li>
            <li>manage vehicle inspections, expenses and timesheets;</li>
            <li>support customer portal functionality;</li>
            <li>store photographs, signatures and documents;</li>
            <li>provide technical support;</li>
            <li>maintain system security and audit trails;</li>
            <li>process subscriptions and payments;</li>
            <li>respond to enquiries;</li>
            <li>improve DigiTise360; and</li>
            <li>comply with legal and regulatory obligations.</li>
          </ul>
        </Section>

        <Section title="9. Lawful bases for processing">
          <p>
            Where DigiTise360 acts as a data controller, we may rely on one or
            more lawful bases under UK data protection law.
          </p>

          <p>
            These may include performance of a contract, legitimate interests,
            compliance with a legal obligation and consent where consent is
            required.
          </p>

          <p>
            Where a customer organisation uses DigiTise360 to process personal
            information about its employees, engineers, customers or other
            individuals, that organisation is responsible for determining the
            appropriate lawful basis for that processing.
          </p>
        </Section>

        <Section title="10. Employer-managed user accounts">
          <p>
            Engineer and staff accounts may be created, controlled, suspended,
            deactivated or removed by the company that employs or engages the
            individual.
          </p>

          <p>
            DigiTise360 provides the technical platform used by organisations
            to manage those accounts. Requests relating to an employer-managed
            account should normally be directed to the relevant company
            administrator.
          </p>
        </Section>

        <Section title="11. How information is shared">
          <p>DigiTise360 does not sell personal information.</p>

          <p>
            Information may be shared with service providers where necessary to
            operate DigiTise360. These may include providers of cloud
            infrastructure, databases, authentication, file storage, email
            delivery, website hosting, payments, analytics and technical
            services.
          </p>

          <p>
            Current technology providers may include Supabase for database,
            authentication, storage and backend infrastructure, Stripe for
            payments and subscription processing, and IONOS for domain and
            email-related services.
          </p>

          <p>
            Other infrastructure providers may also be used where reasonably
            necessary to operate DigiTise360.
          </p>
        </Section>

        <Section title="12. Customer organisations and data separation">
          <p>
            Customer organisations may access information relating to their
            own employees, engineers, customers, sites, jobs, vehicles,
            service records and other operational records.
          </p>

          <p>
            DigiTise360 uses company-level access controls designed to keep
            information belonging to one customer organisation separated from
            information belonging to another.
          </p>
        </Section>

        <Section title="13. International data transfers">
          <p>
            Some technology providers may process information outside the
            United Kingdom.
          </p>

          <p>
            Where international transfers are subject to UK data protection
            requirements, appropriate safeguards will be used where required,
            which may include UK adequacy regulations, recognised contractual
            safeguards or other lawful transfer mechanisms.
          </p>
        </Section>

        <Section title="14. Data security">
          <p>
            DigiTise360 uses technical and organisational measures intended to
            protect information against unauthorised access, accidental loss,
            destruction, misuse, alteration and disclosure.
          </p>

          <p>
            Measures may include encrypted HTTPS connections, authenticated
            access, company-level data separation, role-based permissions,
            database security policies, server-side access controls, audit
            logging and restricted administrative functions.
          </p>

          <p>
            No online system can guarantee absolute security. Users and
            customer organisations remain responsible for protecting their
            passwords, devices and access credentials.
          </p>
        </Section>

        <Section title="15. Offline information on mobile devices">
          <p>
            Some DigiTise360 engineer functionality may store limited
            information locally on a device to support offline working.
          </p>

          <p>
            This may include assigned jobs, incomplete job drafts, queued
            updates, photographs awaiting upload and other temporary working
            information.
          </p>

          <p>
            Users should protect their devices using appropriate security such
            as a PIN, password, biometric authentication or other device access
            controls.
          </p>
        </Section>

        <Section title="16. Data retention">
          <p>
            Personal information is retained only for as long as reasonably
            necessary for the purpose for which it was collected or where
            required by law, regulation, contract or legitimate business need.
          </p>

          <p>
            Retention periods may differ depending on the information involved.
            Job records, accounting records, safety information, maintenance
            records, audit records and asbestos information may need to be kept
            for longer periods.
          </p>

          <p>
            When a customer stops using DigiTise360, information may be
            deleted, anonymised or retained for a limited period in accordance
            with contractual, legal, backup and security requirements.
          </p>
        </Section>

        <Section title="17. Account deactivation and removal">
          <p>
            Customer organisation administrators may deactivate or remove
            staff accounts in accordance with their organisation's
            requirements.
          </p>

          <p>
            Removal of a user login does not necessarily mean all historical
            business records involving that person can or should be deleted.
            Completed job sheets, inspection records, signatures, service
            records, financial records, safety records, asbestos information
            and audit trails may need to be retained.
          </p>

          <p>
            Where appropriate, personal identifiers may be removed or
            anonymised while required business records are preserved.
          </p>
        </Section>

        <Section title="18. Children's information">
          <p>
            DigiTise360 is a business software platform and is not intended for
            consumer use by children. We do not knowingly provide accounts
            directly to children for consumer purposes.
          </p>
        </Section>

        <Section title="19. Cookies and website technologies">
          <p>
            The DigiTise360 website may use cookies or similar technologies
            for functionality, authentication, security, analytics and
            remembering preferences.
          </p>

          <p>
            Where legally required, non-essential cookies will only be used
            after appropriate consent has been obtained.
          </p>
        </Section>

        <Section title="20. Your data protection rights">
          <p>
            Depending on the circumstances, individuals may have rights under
            UK data protection law including rights to request access,
            correction, deletion or restriction of personal information, to
            object to certain processing, request data portability and withdraw
            consent where processing relies on consent.
          </p>

          <p>
            These rights are subject to legal limitations and exemptions.
          </p>

          <p>
            Where information is controlled by a DigiTise360 customer
            organisation, requests should normally be made directly to that
            organisation.
          </p>

          <p>
            You may also contact us at{' '}
            <a
              href="mailto:info@digitise360.com"
              className="font-medium text-primary hover:underline"
            >
              info@digitise360.com
            </a>.
          </p>
        </Section>

        <Section title="21. Complaints">
          <p>
            If you are concerned about how your information has been handled,
            please contact us so that we can investigate.
          </p>

          <p>
            You also have the right to complain to the UK Information
            Commissioner's Office (ICO). Further information is available at{' '}
            <a
              href="https://ico.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              ico.org.uk
            </a>.
          </p>
        </Section>

        <Section title="22. Third-party services">
          <p>
            DigiTise360 may contain links to external websites or integrate
            with third-party services. Those organisations operate under their
            own privacy policies.
          </p>

          <p>
            DigiTise360 is not responsible for the independent privacy
            practices of third parties.
          </p>
        </Section>

        <Section title="23. Changes to this policy">
          <p>
            We may update this Privacy Policy where DigiTise360 functionality,
            integrations, legal requirements or information-processing
            practices change.
          </p>

          <p>
            The latest version will be published on the DigiTise360 website
            with an updated revision date.
          </p>
        </Section>

        <Section title="24. Contact us">
          <p>
            For privacy enquiries, data protection requests or questions about
            this policy:
          </p>

          <div className="rounded-xl border border-border bg-muted/30 p-5">
            <p className="font-semibold text-foreground">DigiTise360</p>
            <p>United Kingdom</p>
            <p>
              Email:{' '}
              <a
                href="mailto:info@digitise360.com"
                className="font-medium text-primary hover:underline"
              >
                info@digitise360.com
              </a>
            </p>
            <p>Website: digitise360.com</p>
          </div>
        </Section>
      </div>
    </main>
  );
}

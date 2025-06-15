
import ContactHeader from "./contact/ContactHeader";
import ContactInfo from "./contact/ContactInfo";
import ContactForm from "./contact/ContactForm";
import ContactMap from "./contact/ContactMap";
import ContactFooter from "./contact/ContactFooter";

const ContactSection = () => {
  return (
    <div className="bg-vv-orange">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ContactHeader />

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <ContactInfo />
          <ContactForm />
        </div>

        {/* Map Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <ContactMap
            title="Bangalore Office"
            src="https://maps.google.com/maps?q=Building%20No.%2022%2C%202nd%20Floor%2C%205th%20Cross%20Road%2C%20N%20S%20Palya%2C%20BTM%202nd%20Stage%2C%20Bengaluru%2C%20Bengaluru%20Urban%2C%20Karnataka%2C%20560076&t=&z=17&ie=UTF8&iwloc=&output=embed"
          />
          <ContactMap
            title="Ambur Office"
            src="https://maps.google.com/maps?q=Guru%20Ji%20Seva%20Arakattalai%2C%20No%3A%206%2F1%2C%20Takshilah%20School%20Main%20Road%2C%20Melkrishnapuram%2C%20Ambur%20-%20635%20802&t=&z=17&ie=UTF8&iwloc=&output=embed"
          />
        </div>
      </div>

      <ContactFooter />
    </div>
  );
};

export default ContactSection;

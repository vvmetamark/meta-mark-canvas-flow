
interface ContactMapProps {
    title: string;
    src: string;
}

const ContactMap = ({ title, src }: ContactMapProps) => (
    <div className="bg-white rounded-lg p-4 shadow-lg">
        <h4 className="font-bold text-vv-navy text-lg mb-4 text-center">{title}</h4>
        <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
            <iframe
                src={src}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`VV Metamark ${title} Location`}
            ></iframe>
        </div>
    </div>
);

export default ContactMap;

import { Link, Text } from "@radix-ui/themes";
import { ClockIcon, MailIcon, PhoneIcon } from "../assets/Icons";
const Contact = () => {
  return (
    <header className="flex justify-around py-2 text-black text-xl">
      <Text>
        <Link
          className="flex items-center gap-2"
          href="mailto:kontakt@kolormotip.pl"
        >
          <MailIcon /> kontakt@kolormotip.pl
        </Link>
      </Text>
      <Text>
        <Link className="flex items-center gap-2" href="tel:+48322520498">
          <PhoneIcon /> +48 32 252 04 98
        </Link>
      </Text>
      <Text className="flex items-center gap-2">
        <ClockIcon /> 8:00-12:00
      </Text>
    </header>
  );
};
export default Contact;

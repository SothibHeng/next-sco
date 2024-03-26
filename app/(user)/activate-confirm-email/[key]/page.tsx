import { ConfirmIcon } from "@/components/icons/FontAwsome";
type Props = {
  params: {
    key: string;
  };
  searchParams: any;
};

import style from "./style.module.css";
import Button from "./components/Button";

export default function ConfirmEmail(props: Props) {
  return (
    <main className={style.container}>
      {/* Confirm Email Card */}
      <section className="flex flex-col items-center">
        {/* Icon Confirm */}
        <ConfirmIcon color="#080" classname="h-32 w-32 mb-2 p-2" />
        {/* Title */}
        <h1 className="text-4xl my-4">Email has been Confirmed!</h1>
        {/* Description */}
        <p className="text-xl">
          Your email has been confirmed! Please go to login page by click this
          button below!
        </p>
        <p className="text-xl​ mt-2">
          អ៊ីមែលរបស់អ្នកត្រូវបានបញ្ជាក់! សូមចូលទៅកាន់ទំព័រចុះឈ្មោះដោយចុច
          ប៊ូតុងខាងក្រោមនេះ។
        </p>
        {/* Button */}
        <Button title="Login" className="my-8" />
      </section>
    </main>
  );
}

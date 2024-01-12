import AuthForm from './auth-form'
import {Image} from "@nextui-org/image";
import NextImage from "next/image";
import signInPage from "../../public/ivy-sign-in-page.jpg";
import { title, subtitle } from "@/components/primitives";

export default function Page() {
    return (

      <div className="flex flex-col container items-center">
        <div className="flex flex-col">
          <div>
            <h1 className={title()}>Sign In</h1>
          </div>
        </div>
        <div className="py-12">
          <AuthForm  />
        </div>
      </div>

    )
}

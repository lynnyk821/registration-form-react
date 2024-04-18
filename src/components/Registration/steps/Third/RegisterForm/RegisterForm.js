import {useState} from "react";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {FieldLabelLayout} from "./FieldLabelLayout";
import {Caption} from "./Caption";


export default function RegisterForm({path, code, number} : {path : string, code : string, number : string}){
    const navigate = useNavigate();
    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const { handleSubmit } = useForm();

    const handleOnChangeEmailInput = (event) => {
        const inputText = event.target.value.toString();
        setInputEmail(inputText);
    }

    const handleOnChangePasswordInput = (event) => {
        const inputText = event.target.value.toString();
        setInputPassword(inputText);
    }

    const onSubmit = () => {
        const data = {
            code : code,
            number : number,
            email : inputEmail,
            password : inputPassword,
        }

        navigate(path + `?data=${encodeURIComponent(JSON.stringify(data))}`);
    }

    return (
        <form className="h-[19rem] flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <div className="h-56 px-6 pt-3 rounded-lg border-[1px] border-solid border-[#E2E4E5]">
                <FieldLabelLayout className="h-20 flex flex-col" label={"Enter your email"}>
                    <input
                        className="w-full h-full px-3 py-1 font-poppins focus:outline-none"
                        value={inputEmail}
                        onChange={handleOnChangeEmailInput}
                        placeholder="alex_manager@gmail.com"
                    />
                </FieldLabelLayout>

                <Caption email={inputEmail} password={""}/>

                <FieldLabelLayout className="h-20 flex flex-col mt-2" label={"Set a password"} eyeButton={true}>
                    <input
                        className="w-full h-full px-3 py-1 font-poppins focus:outline-none"
                        value={inputPassword}
                        onChange={handleOnChangePasswordInput}
                        placeholder="Password"
                    />
                </FieldLabelLayout>

                <Caption password={inputPassword} email={""}/>
            </div>

            <div className="mt-auto">
                <button
                    className="w-40 h-12 text-lg font-medium rounded-[4px] text-white bg-[#007AFF]"
                    type="submit"
                >
                    Register Now
                </button>
            </div>
        </form>
    );
}
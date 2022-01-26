import ContactBanner from "../../Components/Contact/ContactBanner";
import SubmissionForm from "../../Components/Faq/SubmissionForm";

function Contact() {
    return (<>
        <ContactBanner></ContactBanner>
        <div className='text-center w-50 mx-auto my-5'>
            <h1 className='higlight'>Drop Us Message For any Query</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum inventore atque cupiditate necessitatibus harum optio aut amet cum possimus expedita dolore aspernatur fuga, debitis molestias? Ut aperiam nihil magni commodi!</p>
        </div>
        <SubmissionForm></SubmissionForm>
    </>)
}
export default Contact;
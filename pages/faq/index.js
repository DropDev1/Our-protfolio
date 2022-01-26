import FaqBanner from "../../Components/Faq/FaqBanner";
import Questions from "../../Components/Faq/Questions";
import SubmissionForm from "../../Components/Faq/SubmissionForm";


function Faq() {

    return <>
        <FaqBanner></FaqBanner>
        <Questions></Questions>
        <div className='text-center w-50 mx-auto my-5'>
            <h1 className='higlight'>Do You Have Any Questions?</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum inventore atque cupiditate necessitatibus harum optio aut amet cum possimus expedita dolore aspernatur fuga, debitis molestias? Ut aperiam nihil magni commodi!</p>
        </div>
        <SubmissionForm></SubmissionForm>
    </>
}

export default Faq;
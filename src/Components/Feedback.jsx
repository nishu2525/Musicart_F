import React,{useState} from 'react'
import Button from './Button';
import feeback_img from '../Images/feedback.png'
import Styles from './Styles/Feedback.module.css'
function Feedback() {

    const [formOpen, setFormOpen] = useState(false);

    const handleImageClick = () => {
      setFormOpen(true);
    };
    const handleCloseForm = () => {
        setFormOpen(false);
      };
  return (
   <>
    <div className={Styles.container} onClick={handleImageClick}>
        <img src={feeback_img}alt="feedback_img"  />
    </div>
    {formOpen && (
        //   <div  >
          <form action="" className={Styles.form}>
              <label htmlFor="Type">Type of Feedback</label>
              <select className={Styles.Type_selection}>
              <option value='Today' style={{ padding: "1rem" }}>
              Bugs
              </option>
              <option value='This Week' style={{ padding: "1rem" }}>
              Feedback
              </option>
              <option value='This Month' style={{ padding: "1rem" }}>
              Query
              </option>
            </select>
              <label htmlFor="Feedback ">Feedback </label>
              <textarea name="" id="" cols="30" rows="10" placeholder='Type your feedback' className={Styles.textarea}></textarea>
              <Button type="submit" onClick={handleCloseForm}>Submit</Button>
              {/* <button type="submit" onClick={handleCloseForm}></button> */}
          </form>
    //   </div>
      )}
   </>
  )
}

export default Feedback
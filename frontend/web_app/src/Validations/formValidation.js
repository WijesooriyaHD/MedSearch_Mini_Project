import * as yup from "yup";

export const userSchema =yup.object().shape({


    med_name:yup.string().required(),
    comp_reg_no:yup.string().required(),
    comp_address:yup.string().required(),
    comp_name:yup.string().required(),
    comp_tele_no:yup.string().required(),
    unit_price:yup.number("Invalid input").positive("Invalid input").required(),
    availability:yup.string().required(),
   

})
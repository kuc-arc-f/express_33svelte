import { z } from 'zod';
//
const FormData = z.object({
    title: z
    .string()
    .min(2, { message: '2文字以上入力してください。' }),
    content: z
    .string()
    .min(2, { message: '2文字以上入力してください。' }),
});
//
const Validate = {
  /**
   * 
   * @param
   *
   * @return
   */
  formValidate: function(input){
    let errors = {};
    try {
      FormData.parse(input);
//console.log(input);
      return errors;
    } catch (e) {
      console.error(e.flatten().fieldErrors);
      return e.flatten().fieldErrors;
    }
  },
}
export default Validate;

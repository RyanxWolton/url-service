const Button = ({title, ...props}) => (
  <button className="form-element" {...props}>
    {title}
  </button>
)


export default Button;
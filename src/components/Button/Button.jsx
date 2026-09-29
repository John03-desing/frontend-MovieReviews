function Button({ variant = 'primary', block = false, icon: Icon, children, ...props }) {
  const classes = `c-button c-button--${variant}${block ? ' c-button--block' : ''}`

  return (
    <button className={classes} type="button" {...props}>
      {Icon && <Icon className="c-button__icon" aria-hidden="true" />}
      {children}
    </button>
  )
}

export default Button
const Show = (props) => {
  const { user } = props

  return (
    <div>
      Hello, {user.attributes.email}
    </div>
  )
}

export default Show

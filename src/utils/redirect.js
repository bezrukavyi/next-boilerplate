import Router from 'next/router'

export const redirect = (context) => (path, data) => {
  if (context.res) {
    context.res.writeHead(303, { Location: path.href })
    context.res.end()
  } else {
    replace(path, data)
  }
}

export const replace = (path, data = {}) => {
  const { params, shallow = true } = data

  if (params) {
    Router.replace(path.href(...params), path.as(...params), { shallow })
  } else {
    Router.replace(path.href, path.as, { shallow })
  }
}


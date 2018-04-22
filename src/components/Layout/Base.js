import Head from 'next/head'
import style from 'styles/App.scss'

export default (props) => (
  <div>
    <Head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel="stylesheet" type="text/css" href={'/_s/app.min.css'} />
    </Head>
    <div className={props.max ? 'max-container' : 'container' }>
      { props.children }
    </div>
  </div>
)

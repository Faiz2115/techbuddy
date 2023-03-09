import React from 'react'
import {Helmet} from "react-helmet";
const Meta = (props) => {
  return (
    <>

    <Helmet>
        <title>{props.title}</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
    </>
  )
}

export default Meta
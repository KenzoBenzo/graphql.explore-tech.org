import React from 'react'
import { siteMetadata } from '../../../gatsby-config'
import logo from '../../../logo.svg'

const SiteHeader = ({ count }) => {
  const { title, description, content } = siteMetadata

  return (
    <section className="main hero ">
      <div className="hero-body">
        <div className="container has-text-centered">
          <img src={logo} alt="logo" />

          <h1 className="title">{title}</h1>

          <h2 className="subtitle">{description}</h2>

          <a
            className="button is-medium add-action"
            href="https://github.com/boyney123/graphql.explore-tech.org/blob/master/CONTRIBUTING.md#adding-a-material-to-the-website"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" />
            Contribute
          </a>
          <p className="mt20">
            We have {count} resource's for you to explore...
          </p>
          {/* <div className="badges">
            <a
              href="https://github.com/boyney123/graphql.explore-tech.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="badges__github"
                src="https://img.shields.io/github/stars/boyney123/graphql.explore-tech.org.svg?style=social"
                alt="github badge"
              />
            </a>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default SiteHeader

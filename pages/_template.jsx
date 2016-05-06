import React from 'react'
import { Link } from 'react-router'
import { Container, Grid, Span } from 'react-responsive-grid'
import { prefixLink } from 'gatsby-helpers'
import includes from 'underscore.string/include'
import { colors, activeColors } from 'utils/colors'

import typography from 'utils/typography'
import { config } from 'config'

// Import styles.
import 'css/main.css'
import 'css/github.css'
import 'react-bootstrap-table/css/react-bootstrap-table-all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'rc-collapse/assets/index.css';

const { rhythm, fontSizeToPx } = typography

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.object,
    }
  },
  render () {
    const docsActive = includes(this.props.location.pathname, '/docs/')
    const examplesActive = includes(this.props.location.pathname, '/source/')

    return (
      <div>
        <div
          style={{
            background: colors.bg,
            color: colors.fg,
            marginBottom: rhythm(1.5),
          }}
        >
          <Container
            style={{
              maxWidth: 960,
              padding: `${rhythm(1/2)}`,
              paddingBottom: `${rhythm(1/2)}`,
            }}
          >
            <Grid
              columns={12}
              style={{
                padding: `${rhythm(1/2)} 0`,
              }}
            >
              <Span
                columns={4}
                style={{
                    width: '50%',
                    fontWeight: 'bold',
                    height: 24, // Ugly hack. How better to constrain height of div?
                  }}
              >
                <Link
                    to={prefixLink('/')}
                    style={{
                        textDecoration: 'none',
                        color: colors.fg,
                        fontSize: fontSizeToPx('30.5px').fontSize,
                      }}
                >
                  {config.siteTitle}
                </Link>
              </Span>
              <Span columns={8} last> 
                <Link
                    to={prefixLink('/source/')}
                    style={{
                        background: examplesActive ? activeColors.bg : colors.bg,
                        color: examplesActive ? activeColors.fg : colors.fg,
                        float: 'right',
                        textDecoration: 'none',
                        paddingLeft: rhythm(1/2),
                        paddingRight: rhythm(1/2),
                        paddingBottom: rhythm(1),
                        marginBottom: rhythm(-1),
                        paddingTop: rhythm(1),
                        marginTop: rhythm(-1),
                      }}
                >
                  Sourcecode
                </Link>
                <Link
                    to={prefixLink('/docs/')}
                    style={{
                        background: docsActive ? activeColors.bg : colors.bg,
                        color: docsActive ? activeColors.fg : colors.fg,
                        float: 'right',
                        textDecoration: 'none',
                        paddingLeft: rhythm(1/2),
                        paddingRight: rhythm(1/2),
                        paddingBottom: rhythm(1),
                        marginBottom: rhythm(-1),
                        paddingTop: rhythm(1),
                        marginTop: rhythm(-1),
                      }}
                >
                  Documentation
                </Link>
              </Span>
            </Grid>
          </Container>
        </div>
        <Container
            style={{
                maxWidth: 960,
                padding: `${rhythm(1)} ${rhythm(1/2)}`,
                paddingTop: 0,
              }}
        >
          {this.props.children}
        </Container>
      </div>
    )
  },
})

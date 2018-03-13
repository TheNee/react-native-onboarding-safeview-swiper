import { Dimensions, Text, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'

const { width, height } = Dimensions.get('window')

class Page extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width
    }
    Dimensions.addEventListener('change', (e) => {
      this.setState(e.window)
    })
    console.tron.log(this.state.height + ' ' + this.state.width)
  }

  componentWillUnmount () {
    Dimensions.removeEventListener('change')
  }

  render () {
    const { isLight, image, title, subtitle } = this.props
    const { height, width } = this.state
    const potrait = height > width
    const styles = {
      container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 10
      },
      image: {
        height: potrait ? width / 2 : height / 3,
        width: potrait ? height / 2 : width / 3,
        marginVertical: 10,
        alignItems: 'center'
      },
      padding: {
        paddingHorizontal: 10
      },
      title: {
        textAlign: 'center',
        fontSize: 26,
        color: '#fff',
        paddingBottom: 15
      },
      titleLight: {
        color: '#000'
      },
      subtitle: {
        textAlign: 'center',
        fontSize: 16,
        color: 'rgba(255, 255, 255, 0.7)'
      },
      subtitleLight: {
        color: 'rgba(0, 0, 0, 0.7)'
      }
    }

    let titleElement = title
    if (typeof title === 'string' || title instanceof String) {
      titleElement = (
        <View style={styles.padding}>
          <Text style={[styles.title, isLight ? styles.titleLight : {}]}>
            {title}
          </Text>
        </View>
      )
    }

    let subtitleElement = subtitle
    if (typeof subtitle === 'string' || subtitle instanceof String) {
      subtitleElement = (
        <View style={styles.padding}>
          <Text style={[styles.subtitle, isLight ? styles.subtitleLight : {}]}>
            {subtitle}
          </Text>
        </View>
      )
    }

    return (
      <View style={[styles.container, { width: this.state.width, height: this.state.height }]} onLayout={this.onLayout}>
        <View style={styles.image}>{image}</View>
        {titleElement}
        {subtitleElement}
      </View>
    )
  }
}

Page.propTypes = {
  isLight: PropTypes.bool.isRequired,
  image: PropTypes.element.isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
}

export default Page

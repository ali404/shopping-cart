import React, {Component} from 'react'

export class Heart extends Component {
    render() {
        let {
            className,
            strokeColor,
            fillColor,
            size,
            ...other
        } = this.props

        fillColor = fillColor || '#E86C60'
        // strokeColor = strokeColor || '#0f0f0f'

        if(size === 'small') {
            size = '16px'
        }
        else if(size === 'medium') {
            size = '24px'
        }
        else {
            size = '48px'
        }


        className = className || ''
        className += " "

        return (
            <svg
                className={className}
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width={size}
                height={size}
                viewBox="0 0 48 48"
                style={{
                    position: 'relative',
                    top: '2px',
                    margin: '0 1px 0 2px'
                }}>
                <g transform="translate(0, 0)">
                    <path
                        fill={fillColor}
                        d="M43.192,6.808c-5.068-5.068-13.316-5.068-18.385,0C24.526,7.089,24.257,7.385,24,7.695 c-0.257-0.311-0.526-0.606-0.808-0.888c-5.068-5.068-13.316-5.068-18.385,0s-5.068,13.316,0,18.385l18.485,18.485 c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l18.485-18.485C48.261,20.124,48.261,11.876,43.192,6.808z"
                        stroke={strokeColor}
                        stroke-width="2"
                        stroke-linejoin="miter"
                        stroke-linecap="square">
                    </path>
                </g>
            </svg>
        )
    }
}

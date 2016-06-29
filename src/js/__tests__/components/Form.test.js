import React from 'react'
import {mount} from 'enzyme'
import {expect} from 'chai'

import Form from '../../components/Form/Form.react'

describe('Form', () => {
    let form

    beforeEach(() => {
        if(form) {
            form.unmount()
        }

        form = mount(<Form />)
    })

    it('should render', () => {
        expect(form).to.exist
    })
})

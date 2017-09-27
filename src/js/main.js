// /*--------------------------------------------------------------------------------------
//  Dev / Prod enviroment exposed by webpack, we can control inputs during compile time.
//  --------------------------------------------------------------------------------------*/
	if (PRODUCTION) {
		//... script imports in here
	} else if (DEVELOPMENT) {
		console.log('%c RUNNING IN DEV MODE ', 'background: #ff0000; color: #fff; font-size: 15px; padding: 2px 15px;')
		//... script imports in here
	}

require('../scss/bundle-scss.scss') // SCSS IMPORT

import React from 'react'
import ReactDOM from 'react-dom'

import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './index';

storiesOf('Button')
	.add('Button', () => (
		<Button/>
	)).add('With save label', () => <Button label="Save"/>);

/** @format */

import * as yup from 'yup';

export const codeVersionSchema = yup.object().shape({
	hc: yup
		.string()
		.required('HC is required')
		.matches(/^[0-9]{10}$/, 'Must be exactly 10 digits'),
	versionCode: yup
		.string()
		.required('Version code is Required')
		.matches(/^[aA-zZ]{2}$/, 'Must be exactely 2 characters'),
	serviceCode: yup.string(),
});

export const providerSchema = yup.object().shape({
	providerName: yup.string().required('ProviderName  is required'),
	street1: yup.string().required('Street1 is required'),
	street2: yup.string().required('Street 2 is required'),
	state: yup.string().required('State is required'),
	city: yup.string().required('City is required'),
	country: yup.string().required('Country is required'),
	phone1: yup.string().required('Phone is required'),
	email: yup.string().required('Email is required'),
	mobile1: yup.string().required('Mobile is required'),
	organizationId: yup.string().required('Organization is required'),
	providerNumber: yup.string().required('Provider No is required'),
	providerTypeId: yup.string().required('Provider Type is required'),
	specializationId: yup.string().required('Specialization is required'),
	password: yup.string().required('password is required'),
	firstName: yup.string().required('First name is required'),
	lastName: yup.string().required('Last name is required'),
	fullName: yup.string().required('full name is required'),
	clientId: yup.string().required('ClientId is required'),
	active: yup.boolean(),
});

export const createOrganistionSchema = yup.object().shape({
	Name: yup.string().required('Name is required'),
	Phone1: yup.string().required('Phone No is required'),
	Mobile1: yup.string().required('Mobile No  is required'),
	Email: yup.string().required('Email  is required'),
	Street1: yup.string().required('Field  is required'),
	Street2: yup.string().required('Field  is required'),
	City: yup.string().required('City  is required'),
	State: yup.string().required('State  is required'),
	Country: yup.string().required('Country is required'),
	NbrOfProvider: yup.string().required('NBR is required'),
	Active: yup.boolean(),
});

export const UserSchema = yup.object().shape({
	userCode: yup.string().required('UserCode  is required'),
	firstName: yup.string().required('First name  is required'),
	middleName: yup.string(),
	lastName: yup.string(),
	userName: yup.string().required('User name  is required'),
	password: yup.string().required('Password  is required'),
	street1: yup.string().required('Field  is required'),
	street2: yup.string().required('Field  is required'),
	state: yup.string().required('State  is required'),
	city: yup.string().required('City  is required'),
	country: yup.string().required('Country  is required'),
	phone1: yup.string().required('Phone  is required'),
	mobile1: yup.string().required('Mobile  is required'),
	email: yup.string().required('Email  is required'),
	providerId: yup.string().required('Provider name  is required'),
	organizationId: yup.string().required('Organization  is required'),
	departmentId: yup.string().required('Department  is required'),
	roleId: yup.string().required('Role  is required'),
	active: yup.boolean(),
});

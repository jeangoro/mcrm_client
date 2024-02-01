import React from "react";
import '../../../assets/scss/pages/_contacts.scss';
import * as Yup from "yup";
import {ContactForm} from "./ContactForm";
import {useDispatch} from "react-redux";
import {saveContact} from "../../../helpers/backend_helper";
import {toast} from "react-toastify";

export const EditUserContactForm = ({refData, closeModal}) => {
    const form = [
        {
            name: 'gender',
            type: 'select',
            label: 'Genre',
            optionsKey: 'genders',
            validation: Yup.string().required("Veuillez selectionner le genre")
        },
        {
            name: 'lastName',
            type: 'text',
            label: 'Nom de famille',
            validation: Yup.string().required("Veuillez entrer le nom de famille")
        },
        {
            name: 'firstName',
            type: 'text',
            label: 'Prénom',
            validation: Yup.string().required("Veuillez entrer le prénom")
        },
        {
            name: 'agent',
            type: 'select',
            optionsKey: 'agencies',
            label: 'Gestionnaire de compte',
            validation: Yup.string().required("Veuillez entrer le Gestionnaire de compte")
        },
        {
            name: 'destinationCountry',
            type: 'select',
            optionsKey: 'countries',
            label: 'Pays de destination',
            validation: Yup.string()
        },
        {
            name: 'country',
            type: 'select',
            optionsKey: 'countries',
            label: 'Pays de résidence',
            validation: Yup.string()
        },
        {
            name: 'destinationCity',
            type: 'text',
            label: 'Ville de destination',
            validation: Yup.string()
        },
        {
            name: 'city',
            type: 'text',
            label: 'Ville de résidence',
            validation: Yup.string()
        },
        {
            name: 'products',
            type: 'select',
            optionsKey: 'productLabels',
            label: 'Services souhaités',
            validation: Yup.string()
        },
        {
            name: 'contactType',
            type: 'select',
            optionsKey: 'contactTypes',
            label: 'Source de contact',
            validation: Yup.string()
        },
        {
            name: 'spaces',
            type: 'select',
            optionsKey: 'partners',
            label:"Espaces d'appartenance",
            validation: Yup.string()
        },
        {
            name: 'email',
            type: 'email',
            label: 'Email',
            validation: Yup.string()
        },
        {
            name: 'phone',
            type: 'text',
            label: 'Télephone',
            validation: Yup.string()
        },
        {
            name: 'address',
            type: 'text',
            label: 'Adresse',
            validation: Yup.string()
        },
    ];
    const initialValues = {
        gender: '',
        idx: '',
    };
    const onSubmit = (values) => {
        saveContact(values).then(() => {
            closeModal(false);
            toast.success("Le contact a été créé avec succès", { autoClose: 3000 });
        }).catch(e => {
            console.log(e);
            toast.error("Une erreur est survenue lors de la création du contact", { autoClose: 3000 });
        })
    };
    return (
        <ContactForm form={form} refData={refData} initialValues={initialValues} onSubmit={onSubmit} />
    )
};

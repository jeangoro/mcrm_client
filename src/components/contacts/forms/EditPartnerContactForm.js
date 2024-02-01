import React from "react";
import '../../../assets/scss/pages/_contacts.scss';
import * as Yup from "yup";
import {ContactForm} from "./ContactForm";
import {saveContact} from "../../../helpers/backend_helper";
import {toast} from "react-toastify";

export const EditPartnerContactForm = ({refData, closeModal}) => {
    const form = [
        {
            name: 'name',
            type: 'text',
            label: ' Nom de l\'entreprise',
            validation: Yup.string().required("Veuillez entrer le Nom de l'entreprise")
        },
        {
            name: 'societeNo',
            type: 'text',
            label: 'N° de registre commerce',
            validation: Yup.string().required("Veuillez entrer le N° de registre commerce")
        },
        {
            name: 'country',
            type: 'select',
            optionsKey: 'countries',
            label: 'Pays de résidence',
            validation: Yup.string().nullable()
        },
        {
            name: 'city',
            type: 'text',
            label: 'Ville de résidence',
            validation: Yup.string().nullable()
        },
        {
            name: 'capital',
            type: 'text',
            label: 'Capital social',
            validation: Yup.number().nullable()
        },
        {
            name: 'companyType',
            type: 'select',
            optionsKey: 'companyTypes',
            label: 'Type de société',
            validation: Yup.string().nullable()
        },
        {
            name: 'fees',
            type: 'text',
            label: 'Montant frais de service',
            validation: Yup.number().nullable()
        },
        {
            name: 'commissionRate',
            type: 'select',
            optionsKey: 'commissionRates',
            label: 'Taux de commission',
            validation: Yup.number().required("Veuillez entrer le Taux de commission")
        },
        {
            name: 'leadProfile',
            type: 'select',
            optionsKey: 'leadProfiles',
            label: 'Profil lead',
            validation: Yup.string().required("Veuillez entrer le Profil lead")
        },
        {
            name: 'products',
            type: 'select',
            optionsKey: 'productLabels',
            label: 'Choix des produits ou services',
            validation: Yup.string().nullable()
        },
        {
            name: 'spaces',
            type: 'select',
            optionsKey: 'partners',
            label:"Espaces d'appartenance",
            validation: Yup.string().nullable()
        },
        {
            name: 'email',
            type: 'email',
            label: 'Email',
            validation: Yup.string().required("Veuillez entrer le Profil lead")
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
        }
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

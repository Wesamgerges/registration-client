export default {
    fields: [{
        type: "input",
        inputType: "text",
        label: "Street name",
        model: "address.streetName",
        required: true,
        validator: "string",
        styleClasses: 'col-sm-9'
    },
    {
        type: "input",
        inputType: "text",
        label: "Street number",
        model: "address.streetNumber",
        required: true,
        validator: "string",
        styleClasses: 'col-sm-3'
    },
    {
        type: "input",
        inputType: "text",
        label: "City",
        model: "address.city",
        required: true,
        validator: "string",
        styleClasses: 'col-sm-6'
    },
    {
        type: "select",
        label: "Country",
        model: "address.country",
        required: true,
        validator: "string",
        values: ['United Kingdom', 'Romania', 'Germany'],
        styleClasses: 'col-sm-6'
    },
    ]
}
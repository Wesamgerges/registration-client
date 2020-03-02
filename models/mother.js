export default {
    fields : [{
        type: "input",
        inputType: "text",
        label: "First name",
        model: "mother.firstName",
        required: true,
        validator: "string",
        styleClasses: 'col-sm-6'
    },
    {
        type: "input",
        inputType: "text",
        label: "Last name",
        model: "mother.lastName",
        required: true,
        validator: "string",
        styleClasses: 'col-sm-6'
    },
    {
        type: "input",
        inputType: "text",
        label: "Cell Phone",
        model: "mother.phone",
        required: true,
        validator: "string",
        styleClasses: 'col-sm-6'
    },
    {
        type: "input",
        inputType: "text",
        label: "Email",
        model: "mother.email",
        required: true,
        validator: "email",
        styleClasses: 'col-sm-6'
        }
    ]
}
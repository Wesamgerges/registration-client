export default {
    fields : [{
        type: "input",
        inputType: "text",
        label: "First name",
        model: "father.firstName",
        required: true,
        validator: "string",
        styleClasses: 'col-sm-6'
    },
    {
        type: "input",
        inputType: "text",
        label: "Last name",
        model: "father.lastName",
        required: true,
        validator: "string",
        styleClasses: 'col-sm-6'
    },
    {
        type: "input",
        inputType: "text",
        label: "Cell Phone",
        model: "father.phone",
        required: true,
        validator: "string",
        styleClasses: 'col-sm-6'
    },
    {
        type: "input",
        inputType: "text",
        label: "Email",
        model: "father.email",
        required: true,
        validator: "email",
        styleClasses: 'col-sm-6'
        }
    ]
}
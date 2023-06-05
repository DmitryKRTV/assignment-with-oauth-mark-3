import {Card, Form, Input, Select} from "antd";
import {extractValueFromStorage} from "../../utils/functions";

function JobForm({ handleInputState, onChangeJobType, onChangeJobSource }) {
    return (
        <Card title="Job details" style={{marginBottom: "15px"}}>
            <Form
                name="job"
                wrapperCol={{ span: 24 }}
                style={{ width: 280 }}
                initialValues={{
                    jobType: extractValueFromStorage("jobType"),
                    jobSource: extractValueFromStorage("jobSource"),
                    jobDescription: extractValueFromStorage("jobDescription"),
                }}
                autoComplete="off"
            >
                <Form.Item name="jobType">
                    <Select
                        options={[
                            { value: "", label: "Select job type", disabled: true },
                            { value: "Dishwasher repair", label: "Dishwasher repair" },
                        ]}
                        onChange={onChangeJobType}
                    />
                </Form.Item>

                <Form.Item name="jobSource">
                    <Select
                        options={[
                            { value: "", label: "Select job source", disabled: true },
                            { value: "GL Orlando", label: "GL Orlando" },
                        ]}
                        onChange={onChangeJobSource}
                    />
                </Form.Item>

                <Form.Item name="jobDescription">
                    <Input.TextArea placeholder="Job description" onChange={handleInputState} />
                </Form.Item>
            </Form>
        </Card>
    );
}

export default JobForm;

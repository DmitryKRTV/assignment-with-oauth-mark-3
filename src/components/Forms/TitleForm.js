import {Card, Form, Input} from "antd";
import {extractValueFromStorage} from "../../utils/functions";

function TitleForm({ handleInputState }) {
    return (
        <>
            <Card title="Job title" style={{marginBottom: "15px"}}>
                <span style={{ opacity: "0.2", fontSize: "14px" }}>*required</span>
                <Form
                    name="title"
                    wrapperCol={{ span: 24 }}
                    style={{ width: 280 }}
                    initialValues={{ title: extractValueFromStorage("title") }}
                    autoComplete="off"
                >
                    <Form.Item name="title">
                        <Input placeholder="Job title" onChange={handleInputState} />
                    </Form.Item>
                </Form>
            </Card>
            <div></div>
        </>
    );
}

export default TitleForm;

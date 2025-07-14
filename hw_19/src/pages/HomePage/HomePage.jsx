import { Button, Form, Card, Input, Typography, Space } from "antd";

import { useState } from "react";

const { Text } = Typography;

export default function HomePage() {
  const [formData, setFormData] = useState({ username: "", description: "" });

  const onFinish = (values) => {
    console.log("Success:", values);
    setFormData(values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    alert(errorInfo);
  };

  return (
    <div>
      <Form
        layout="vertical"
        name="basic"
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Имя"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="Name" />
        </Form.Item>

        <Form.Item
          label="Описание"
          name="description"
          rules={[{ required: true, message: "Please input description!" }]}
        >
          <Input placeholder="Description" />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Отправить
          </Button>
        </Form.Item>
      </Form>

      <Card
        title="Отправленные данные:"
        style={{ width: 300 }}
        variant="borderless"
      >
        <Space direction="vertical">
          <Space direction="horizontal">
            <Text strong>Имя:</Text>
            <Text>{formData.username}</Text>
          </Space>
          <Space direction="horizontal">
            <Text strong>Описание:</Text>
            <Text>{formData.description}</Text>
          </Space>
        </Space>
      </Card>
    </div>
  );
}

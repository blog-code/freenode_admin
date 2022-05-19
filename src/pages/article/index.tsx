import React, { useState } from 'react'
import { Form, Row, Col, Input, Button, Select, Table } from 'antd'
import { tableColumns } from './initData'
import styles from './index.less'
import { history } from 'umi'
const { Option } = Select

export default () => {
  const [form] = Form.useForm()

  const onFinish = (values) => {
    console.log('Received values of form: ', values)
  }

  const columns: any = [
    ...tableColumns,
    {
      title: '操作',
      dataIndex: 'action',
      key: 'action',
      fixed: 'right'
    }
  ]

  const goEdit = () => {
    history.push('/edit')
  }

  return (
    <div className={styles.content}>
      <Form
        form={form}
        name="article_search"
        className={styles.articleForm}
        onFinish={onFinish}
      >
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item name="1" label="关键字">
              <Input placeholder="请输入关键字" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="2" label="分类">
              <Select placeholder="请选择分类">
                <Option value="1">1</Option>
                <Option value="2">longlonglonglongl</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item name="3" label="标签">
              <Select placeholder="请选择标签">
                <Option value="1">1</Option>
                <Option value="2">longlonglonglongl</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col
            span={12}
            style={{
              textAlign: 'left'
            }}
          >
            <Button type="primary" onClick={goEdit}>
              新增
            </Button>
          </Col>
          <Col
            span={12}
            style={{
              textAlign: 'right'
            }}
          >
            <Button type="primary" htmlType="submit">
              查询
            </Button>
            <Button
              style={{
                margin: '0 8px'
              }}
              onClick={() => {
                form.resetFields()
              }}
            >
              重置
            </Button>
          </Col>
        </Row>
      </Form>
      <div className={styles.articleTable}>
        <Table columns={columns} dataSource={[]} />
      </div>
    </div>
  )
}
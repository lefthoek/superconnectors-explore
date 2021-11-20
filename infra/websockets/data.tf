data "aws_iam_policy_document" "connections_table_access" {
  statement {
    actions = [
      "dynamodb:*",
    ]

    resources = [
     aws_dynamodb_table.connections_table.arn
    ]
  }
}

data "aws_iam_policy_document" "subscriptions_table_access" {
  statement {
    actions = [
      "dynamodb:*",
    ]

    resources = [
     aws_dynamodb_table.subscriptions_table.arn,
     "${aws_dynamodb_table.subscriptions_table.arn}/index/*"
    ]
  }
}

data "aws_iam_policy_document" "api_gateway_access" {
  statement {
    actions = ["execute-api:*"]

    resources = [
      aws_apigatewayv2_api.ws.execution_arn,
      "${aws_apigatewayv2_api.ws.execution_arn}/*"
    ]
  }
}

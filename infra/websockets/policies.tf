resource "aws_iam_policy" "connections_table_access" {
  name = "${local.connections_table}-access-policy"
  path   = "/"
  policy = data.aws_iam_policy_document.connections_table_access.json
}

resource "aws_iam_policy" "subscriptions_table_access" {
  name = "${local.subscriptions_table}-access-policy"
  path   = "/"
  policy = data.aws_iam_policy_document.subscriptions_table_access.json
}

resource "aws_iam_policy" "apigateway_access" {
  name = "${local.prefix}-apigateway-access-policy"
  path   = "/"
  policy = data.aws_iam_policy_document.api_gateway_access.json
}

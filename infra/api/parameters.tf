resource "aws_ssm_parameter" "role" {
  name        = "${local.parameter_prefix}/role"
  type        = "SecureString"
  value       = aws_iam_role.api_role.arn
}

resource "aws_ssm_parameter" "connections_table_name" {
  name        = "${local.parameter_prefix}/connections_table/name"
  type        = "SecureString"
  value       = module.websockets.connections_table_name
}

resource "aws_ssm_parameter" "subscriptions_table" {
  name        = "${local.parameter_prefix}/subscriptions_table/name"
  type        = "SecureString"
  value       = module.websockets.subscriptions_table_name
}

resource "aws_ssm_parameter" "connections_arn" {
  name        = "${local.parameter_prefix}/connections_table/arn"
  type        = "SecureString"
  value       = module.websockets.connections_table_arn
}

resource "aws_ssm_parameter" "subscriptions_arn" {
  name        = "${local.parameter_prefix}/subscriptions_table/arn"
  type        = "SecureString"
  value       = module.websockets.subscriptions_table_arn
}

resource "aws_ssm_parameter" "apigateway_id" {
  name        = "${local.parameter_prefix}/apigateway_id"
  type        = "SecureString"
  value       = module.websockets.apigateway_id
}

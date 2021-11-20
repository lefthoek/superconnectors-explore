resource "aws_ssm_parameter" "role" {
  name        = "${local.parameter_prefix}/role"
  type        = "SecureString"
  value       = aws_iam_role.api_role.arn
}

resource "aws_ssm_parameter" "connections_table" {
  name        = "${local.parameter_prefix}/connections_table"
  type        = "SecureString"
  value       = module.websockets.connections_table_arn
}

resource "aws_ssm_parameter" "subscriptions_table" {
  name        = "${local.parameter_prefix}/subscriptions_table"
  type        = "SecureString"
  value       = module.websockets.subscriptions_table_arn
}

resource "aws_ssm_parameter" "connections_table_name" {
  name        = "${local.parameter_prefix}/connections_table"
  type        = "SecureString"
  value       = local.connections_table
}

resource "aws_ssm_parameter" "subscriptions_table_name" {
  name        = "${local.parameter_prefix}/subscriptions_table"
  type        = "SecureString"
  value       = local.subscriptions_table
}

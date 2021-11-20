output "connections_table_access_policy" {
  value = aws_iam_policy.connections_table_access.arn
}

output "subscriptions_table_access_policy" {
  value = aws_iam_policy.subscriptions_table_access.arn
}

output "connections_table_name" {
  value = local.subscriptions_table_name
}

output "subscriptions_table_name" {
  value = local.subscriptions_table_name
}

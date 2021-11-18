locals { 
  policies = [
    aws_iam_policy.connections_table_access.arn,
    aws_iam_policy.subscriptions_table_access.arn,
  ]
}

resource "aws_iam_role" "api_role" {
  name                = local.role
  assume_role_policy = data.aws_iam_policy_document.lambda_role_assume_role_policy.json
  managed_policy_arns = concat(var.policies, local.policies)
}

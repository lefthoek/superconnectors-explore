locals { 
  policies = [
    module.websockets.connections_table_access_policy,
    module.websockets.subscriptions_table_access_policy,
    module.websockets.apigateway_access_policy
  ]
}

resource "aws_iam_role" "api_role" {
  name                = local.role
  assume_role_policy = data.aws_iam_policy_document.lambda_role_assume_role_policy.json
  managed_policy_arns = concat(var.policies, local.policies)
}

resource "aws_iam_policy" "api_gateway_access" {
  name = "${var.project_prefix}-${local.name}-api-gateway-access-policy-${var.environment_name}"
  path   = "/"
  policy = data.aws_iam_policy_document.api_gateway_access.json
}

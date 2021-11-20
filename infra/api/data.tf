data "aws_iam_policy_document" "lambda_role_assume_role_policy" {
  statement {
    actions = ["sts:AssumeRole"]

    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }
  }
}

data "aws_iam_policy_document" "api_gateway_access" {
  statement {
    actions = ["execute-api:*"]

    resources = [
        "arn:aws:execute-api:*"

    ]
  }
}

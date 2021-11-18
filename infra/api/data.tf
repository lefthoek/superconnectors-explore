data "aws_iam_policy_document" "connections_table_access" {
  statement {
    actions = [
      "dynamodb:*",
    ]

    resources = [
     aws_dynamodb_table.connections-table.arn
    ]
  }
}

data "aws_iam_policy_document" "subscriptions_table_access" {
  statement {
    actions = [
      "dynamodb:*",
    ]

    resources = [
     aws_dynamodb_table.subscriptions-table.arn,
     "${aws_dynamodb_table.subscriptions-table.arn}/index/*"
    ]
  }
}

data "aws_iam_policy_document" "lambda_role_assume_role_policy" {
  statement {
    actions = ["sts:AssumeRole"]

    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }
  }
}

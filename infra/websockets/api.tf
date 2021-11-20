resource "aws_apigatewayv2_api" "ws" {
  name                       = "websocket-api"
  protocol_type              = "WEBSOCKET"
  route_selection_expression = "$request.body.action"
}

resource "aws_apigatewayv2_deployment" "ws" {
  api_id      = aws_apigatewayv2_route.ws.id
  description = "Example deployment"

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_apigatewayv2_stage" "ws" {
  api_id        = aws_apigatewayv2_api.ws.id
  name          = var.environment_name
  deployment_id = aws_apigatewayv2_deployment.ws.id
}


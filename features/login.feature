Feature: Login to freecash web app

  As a user
  I want to login to freecash web application

  Scenario Outline: verify user can login succesfully with valid email and password
    Given I am on login page
    Then I login to application with "<username>" and "<password>"
    Then I should see HomePage
    Examples:
      | username               | password   |
      | freecashtest@gmail.com | Test@12345 |

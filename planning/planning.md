## Project 4 Come Fly with Me Insurance

## Project Description

Travel Insurance WebSite

## Stacks

- **FrontEnd** : [ReactJS](https://reactjs.org/), [Tailwind](https://tailwindcss.com/),[Axios](https://axios-http.com/docs/intro)
- **Backend**: [Express](https://expressjs.com/), [prismaORM](https://www.prisma.io/)
- **Database**: PostgreSql
- **Hosting**: [bit.io](https://bit.io/), [Netlify](https://www.netlify.com/), [flyio](https://fly.io/)

## Wire Frames

[Wireframes and ERDiagram](https://miro.com/app/board/uXjVPywQQF4=/?share_link_id=796662062813)

## Models

**Users**
| id | title | first_name | last_name | citizen_id | birth_date | address | phone_number | email | password | is_admin |
|--|--|--|--|--|--|--|--| -- | --| -- |
| pk | varchar(10) | vachar(50) | varchar(50) | varchar(13) | DATE | fk | varchar(10) | vachar(100) | varchar(255) | boolean |

**Plan**
| id | detail | name | type | plan_price | unit |
|--|--|--|--|--| -- |
| pk |varchar(255)| varchar(100) | varchar(50) | integer | varchar(50)

**Cover**
| id | plan_id | detail | coverage |
|--|--|--|--|--|
| pk | fk(Plan) |varchar(255) | integer |

**Insurance**
| id | plan_id | user_id | total_price | destination | departure_date | return_date | payment_status |
|--|--|--|--|--|--| -- | --|
| pk | fk(Plan) |fk(User) | integer | varchar(100) |Date | Date | boolean |

## User Stories

As a **Customer,** I want to see Insurance Plan, So that the Website show list of insurances at the <ins>lndex page</ins>.
As a **Customer,** I want to see an Insurance Detail, So that you click on the card of plan you want to see and the Website show detail of the insurance at the insurance <ins>fillter page</ins>.
As a **Customer,** I want to buy an Insurance Plans, So that Website asks you to login.
As a **Customer,** I want to login, So that Click on Register at the navigation bar and website will show <ins>register page</ins>.
As a **Customer,** I already have an account and I want to login, So that Click on Login at the navigation bar and website will show <ins>login page</ins>.
As a **Customer,** I already login and I want to buy a plan, So that Click on card of plan I want and website will show <ins>plan detail</ins>.
As a **Customer,** I clicked on the buy button, So that <ins>submit plan page </ins>will asks for you information if the plan need more than you filled in the login page.
As a **Customer,** I fill all form in submit plan page and submit, So that Website will show you the <ins>Summary&Pay page </ins>and you can click confirm.

As a **Customer,** I want to see my insurances, So that click on the my insurances and website will show <ins>my insurances page </ins>
As a **Customer,** I want to see my profile, So that click on the my profile and website will show <ins>my profile page</ins> you can edit your profile here.

As a **Admin,** I want to do CRUD with user detail and plan detail,So that you need to go to /admin and login as admin to see <ins>the dashboard page</ins> .

### MVP Goals

- [ ] User can see the list and detail of an Travel insurance plan.
- [ ] User can buy an Travel insurance plan and see his plan.
- [ ] User can Register login and edit profile
- [ ] Admin can CRUD with user detail and plan in dashboard

### Stretch Goals

- more insurance type with different information requirements and form.
- User can do the real payment.
- register, payment ,password changed email confirmation.
- promotions, refer code.

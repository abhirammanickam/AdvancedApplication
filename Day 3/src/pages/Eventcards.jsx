import React from 'react';
import '../assets/css/Eventcards.css'; // Import your CSS file for styling
import Home from './Home';
import Footer from './Footer';

function Eventcards() {
  return (
    <div>
    <div className="event-cards-container">
      
      <div className="event-card"><center>
        <img src="https://media.istockphoto.com/id/1404145480/photo/cardiologist-doctor-examine-patient-heart-functions-and-blood-vessel-on-virtual-interface.jpg?s=612x612&w=0&k=20&c=XVV0i6cPcq-qMYvq66cPihgkWlsjExpPmdsoXBHnLGI=" />
        <div className="event-card-content">
          <h3 className="event-card-title">Specialist : cardiologist</h3>
          <p className="event-card-description">Fees : $20</p>
          <a href="#" className="event-card-link">Read More</a>
          </div></center>
      </div>
      
      
      <div className="event-card"><center>
        <img src="data:image/jpeg;base64,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" />
        <div className="event-card-content">
          <h3 className="event-card-title">Specialist : Anesthesiologist</h3>
          <p className="event-card-description">Fees : $60</p>
          <a href="#" className="event-card-link">Read More</a>
        </div></center>
      </div>
      
      <div className="event-card"><center>
        <img src="https://media.istockphoto.com/id/1437090427/photo/female-doctor-examining-patients-birthmarks.jpg?s=612x612&w=0&k=20&c=IoJOTOwQsnFuxaP1ZFk0qeNH7maD8MgvT9SBJ9hIq5M=" />
        <div className="event-card-content">
          <h3 className="event-card-title">Specialist : Dermatologist</h3>
          <p className="event-card-description">Fees : $50</p>
          <a href="#" className="event-card-link">Read More</a>
        </div></center>
      </div>
      <div className="event-card"><center>
        <img src="data:image/jpeg;base64,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" />
        <div className="event-card-content">
          <h3 className="event-card-title">Specialist : Nephrologist</h3>
          <p className="event-card-description">Fees : $90</p>
          <a href="#" className="event-card-link">Read More</a>
        </div></center>
      </div>
      <div className="event-card"><center>
        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUSEhISEhUSEhEYGBIWEhISERIYGBISGBQZGRgUGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHhISHjQhJCE0NDQ0NDQ0NDQxNDQxMTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDE0NDQ0NDE0NDQxNDE0ND80NP/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAACAAEEBQYDB//EAD4QAAEDAwIEAwQIBgEDBQAAAAEAAhEDBCESMQVBUWEicYETMpGhBhQjQlKxwfBicoKS0eHxFaKyBzNDU2P/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EACARAQEBAQACAgMBAQAAAAAAAAABAhESIQMxIkFRYTL/2gAMAwEAAhEDEQA/AL5OEk4WEOESYIggSIJgiCBwiCYJwgcJJJ0CTpBOgaE8J0kDQutDdc0dAw4IL61bhSFFo1hCKSVtI7EhR7qpDTCItK53FGWlRpkeIw5xlVL2NUzi1FweclVj6RhAXhXMEErkWQgYzTkqpXS/pSBCseCUyAq+0qe0dHJaa3pBoEKas6zmWT27IUSSw0CEyJIhUCmTpIBIQlGhKAUkSSAQiCSQWgSdMnCyCCIIQiCAgnTBOEDpwmRoGTpJIEnSToGSTp4Qd7epCsaVeVTtXVjyFei8Dk9TYqHbXE7qU5+FVZPjVPxFU+jC1V/RDslUlw1rQdleHVM6nmeSquJXceEKZxXiIaCGrKVqxc8E9VnV4sz1r+B2pw9aensqf6PV2mmAroBRKdKETGyYU+jazgN1u65iew5oithCrSva6cObp7gEEemxUCrT0mP2R1QciEKJMUApiiTFAMJ0kkDJwmCdaDp0k6yCCcJgiCBwiCYJwgIJ0yJAkkk6BJwEoTwgYBEGpALo1qAQ1dWUJE8uwknyCdrFOo0g4btAhsSem/zlakEWmyNp8iIPopGuQgubYt0FhaYcJ0nYdVEo1jscLOp43sdM8s5XDiTyAVk+IVzlbO5YHBZu9sS4nS0u6wCY8+ieVXwjH1bd1Ry7UuDcyFprHhsZcWD+th/IqTcUGxhzP7wPzW8577rGtc9Rn7FvsiIOFp7auHDdUle0cfdbr/kIf/4yqmvfvp5bJA3V1lz69AtfeHrHnGPmtFwpjdIP3p68o/5XmfAfpE2oQCYPnstzb3emCCGu3IIwCf3tylYjUq44gxpY4mNUYyszeD3fI/8Ak5WFze6sudPZv+dgqqs/UZ/Y7JRxKZEhUDJkRCYoBSTpIACIJk60ydOEyIKUJGEwRBRo4RBCEQQEE6ZOgdOEwRNbKBgiASDVIZbOPbzICvBzaF1Y1F7At3+PJd208K8oiVqkYG6m8KpOg6tj1XOztwXGd+nZXVJgAwrJwO2kOgUO74e05EAqwBCTtkvtYy9YacAServ0H+ZVfdWxf7xJ6TsPIcloLu38UqBcUScDfoEmS6Ur6YaFAuMq+fw15BwAehcJ8oVQ6kZ29F0jnVTVt5UeuXnFQCoP/wBASfR/vD4x2Wop8Kdg1C2nOzTBcfJshFW4RTIzU0nlrpOA/u2CnBgTZNpvNahqdUaJZQdEl/4gdngCTpABJgQRJVv9H+PGoIeTq5z15ouOcJfRB1gFp917TLSYkQfLqqjhD/aPIdirPhqH/wCT+F5/F0dz59VPE63DbvVgLtPVDwmyxqO/dd71nRLhOuIeEyC2pHVld7ynpbjdS4amnNKJKhU7kgw7CsaIEauSxzi9dPCOSS4l6ZRXJOkElpk6IIUSlBBEEIRBONHRNQomqggnTBOgJjZMK3t7YQotjQ5lWjcYWsxlBbb+P5DzO36qYbfR7x/UklBUfpMgSZBA6xy/NUnFPpQBs0w2C4ggEOkEtG8jG6zrcz6dM/HrS5uvDO+xMEYIAneVRWd++nVNOo8uZJ0kx6fJWf1sVqAqskl4cJJHhxEk9srN3rWufqDy06mxraYwQBls8uy59trrMTjT3LdRa4YI2IVjZVS6Q45EdPiodZhaABnGSMorepEHmfy/5/JbyxqLdoRQuNKrK6ytMItw1VtXBB6EFWdyVXVlqM1LpsDmls4JJB6TkH4kqvNtDzppk1fxx4RP3p2R21ctOnr7p79FY06hLZOCDB6cjI8wQrzidlc6VJtKdMF595xMud3M8uwTVbgQQYIIggiQRGZHxUO5d4nfvf8A5Crq90GggEgxuD+qsyl0hcbszTBaR7SyqEMMnNFzzDQT+AuI8X3SQeRnH0uDuo1TTMnILXERqYdiRyPUciCF6RZxVbpeNTHN0va5pyHCCDyyP2FW1rTwsL8uY4scepBLST5lmr+sqz7S/STw932Y1e8AJ7jYOQXdI7qDXu/ZvZG0wR1bzHwV/wCzlnXv1HVW+mZ7QreiPeKZ1IPk8gu9U6W6RuhJ0M6lRplOKjxwJEKbZV9TI5jdQ+KMdqLiq+leezdqG2xWNZXNaFJcWXEgJLnxrroE4TBOqhIkKJAQRBCEQRo6JqFE1AQXW3ZqcAuQU3h9OTKRKtqLAAge/K6uwFAuHwV0Su9yzUPRYj6R09OrUxj55u1g+uhwnzW2dU8IPTdZj6TgFpO8jC83yzlev4L0f0OuhUo1aMBoYQ5oGrIdv7xJ3HXmo/E2Q71/VVn0QutF0G8nhzD65HzA+KtOLuh5lZ63c2arSU6vtKTKnOM+Y3XF1eHkTtA36YUb6P1ZokcpH5wVCrXHiJ7ldc1x1OVo7e4mAFaaoWX4XV1VGjvn0ytEXrpmOOrwFw7Cr6jlKuKmFWveuucuWtAqOVhbXRJbsQ8OBHR7QSPjDvkqmo9Kxqk62j3gNbP5hEfMMXS4/Fym/wAk+8pmNUZ/DnIG5PxIjuqutTDt4G2MSRPUq6voc3UPdIaQc8xP6qpeADviRA6D181nM7GtXlNbPdTLYOoAgAEnAnf8/guzD4rth5PFQY+69jXiPKCPigbUDYPcSMSRI9eYUuo2XOPM0RMRsC8D5OUs5Wpexkr6p9oPNa+wqzTYe0fD/ULE1fE+e61PDXfZR0P5gf4V1EzUlvieUVdsZT2LNz3Xd7J3WL9txkuKsdUJgEBUL7fTM/srf1qbTiFl+LWkOx7qlI521Q6G55J1U+1hJY411p04TJLIdEhRICCIIQiCB0TUKIIvRBXXD6cNVbZU9TxjC0DKWIWsxHN7JXCiWOeWjOkST36KRe+Gm5U9CoKNvXru5Ne/4AldJPXWNa/KRJoXTarHObkant/tcW/os/xhsg04zB0d/wCFUv0D414H06h3LnierjJVpxG51y5sAt5lePf29vw3kZypbvt6lOoMlpa7zgzC0fGm+0b7RphpAdPYiQqS5un1G6XR8vzV5ZEVLcMHicAGloiRA6fvZTjvdSun0RutTKjCctc139Lsfm0fFRL2rD3DoSj4Tw6pR9pUeNBfoY1kgnTqBLjG2w+a58dZBJGzvF6uyfnI9FvN9ue8/wAT+A3P2rYkzIgAmJG61L3EbgjzBWN+izgXBskF7ywkGDpDC8Z7lvyW6bRIaIMno6IPYwF3zXj3n2ra78Kse9WtxTDmkjwHpyB5g9FSVwWkhwg/mOoXqxJXl3bA1Ki68PaWk1XAhgBj+IyIA+Eeaj0aZqPDcxjUeg/z0WgYxrG+0cBgfZt5NAEAjuRz6QOZne9TM5/XPGbq9/gK5aymymTLmsY09J0/6VVqxg8geXPmP8pXd0Xl36Hljf8AcoKTxB5Rkz29FM5uZ2rrU1eR0t7cvqEyRHKcOMyBjfaY7clZXbtJcMeCjnzOox/2oLWKYdVeS1gzDhuTloB2J7BRuK3RFNxI0vqEEs5sptAgHvj5lcr+WnafjlnrehLlqrCxPs/Wfl/tUPD3jUJW1ta7QwDnCzu3rWJOItClplKo8KTVEjCiupQVjrfHBzBzVVxW29phvqrSq3MjZVl9dBiqVUf9JZ1SUardEk5STsRZJJBJcWzoghRBAQRBCEQQOFItKBe4D4qOFf8AB6ENk7lJBMtrVrAMKQkkVtpB4qfsyqi6pmpYXNPmadQD+0q14ps0cs/konDBqZUYczIjzELpP+XHV/N4Twy9LIIMK8/6w4tgndZW8pmjWqU3CHMe9hHTS4hN9ZK4ax2vRNcjSVOK4iVXM4tWbUDqb3MLSCIO/n1UGkSTlSLdn2g7rpn45I56+S16Jw3j769OKjYdzLdifLkptSk6owF7Q7SSMjOknHwdP9wUHglBgaOgj4q1vL9rC0ASNnDqOYWbjMq5+bVn2PglJtIy9kw4OY5riC055f1O581rG3JcPA4E9HNz6gf7WW+ttaBzBEtPUf55HuutvcSJHoumcxjWr32vfaB+Ht0v6tJGoDm0g8uijupzhzw9mfDUZLh5OByVCHEHDDvG3fOD5h3XuprLtr2khusiJHhDweW+CeX6yt8sY7KAhjMYLBktY0NB/mMkn0I6Lld1jUG8DfS3eOX77dl1Y1lQB7CXMJMgiNJBy1w3BGcd+iD2EEgSTA5zI6Cdv9lazZ3/AFjUvOfpUOZmDk4iD1yI6K34VbySCAQAzrueo54n5Lo3hwALnwG4kkAAARz5ZG/Zc2VmPYWUpFMz7StkawBlrCcx1dsBPVXe/KciZx43tFd1muh5I9hT9wADxvHh1dxyA6ydllr+7NRxcefLoOQU7il5rhrPcb7sCATESB0jA/2qV5kq5zyGr5VMsZc9rROd45AZJ+Eqzp8QOsATk+Foz5D4KFQpezZnD3QT/C3cN8zg+g7rvSmoWUy5oc/V43EgmMNYXDJkt+Y6LOv61m/prLZ5LRII813coPDdPsw5sjDZBMxIB0nvBCludC413jhVAgrL31g+XOmROy09UyIUZ9IlIlYo0COQ+CdaCrRMnwpK8Z6iBJMnXFs6IIUQQEEQQhEEHWgzU5o7rVW7NLQFmLA/aNWpbsFrKwcpiUgmVVF4k37OehCz7L8Uaniw07notJds103NG5GPNYziA2kZyCO/Qrt8c7LHn+X1qVk//UTgLXXDa1OG+1AdP3XPGCPOIKwxtHU3FtRpaeh59x1C9U4rbipZkOOabw5mchhwR81RQ1zQ2o1tQDbUASPVPAm6yNFuVYWti97wWthv4jgK4eadPLGMB8l3tSahBccdFrid6tuH4YGN7SepU9li5+YlQbJvja0bkrd8IYwgZnvGFx3zrpmMwzhznH2bgdG8/gP4v8jn5wu5pGkIPoRsR2WrvmNaMR/lZe/vWNB1Eaeh2PfsVc1dRENSSm9u6m4PaYI+BHQ9lHY9j803g/wvIB9HbH5JqriMOBaehBC7SuNi6suJguc6k5ge7NSi8HxED3hGdUfeAM4kA5Vj9ec6fs2NPX7R5HL3Sxv5hec3Loek67cRpDnR0kx8Fnxi+VbK8rse77V+qD/7b3S1vlSZsf55UW+4iXjQ2WsxjEujaYwB2GFS2bQxud1MZQe7JGhvV+JHYbn0C3ORn3XKq9SbS00kOdGv7rT93+J3ft8eh721NjTiSf8A7HbtPVo5R1yekIPZPBMNcYJBgE5HdLrpJxLc8NcGkajzPWeagXENqaCeepjm50kxII6YHlCkPv4iWgkcyqx7/EXfecYHqs1uNzYYaSXai7LiBuT6YUh5lQrFuim0bmBPmpQad8rjXWAewqLXe5owVJfq6EDqoVx8ikKj/WklBfucpLTIE6EIguDZ04TJwgMIggCIIOlN+kg9FpbWuHtELMBSbS5NM9lZeDSB6dz1Fo1w8SETitnXVzlQ8d4U+o0upO0v3gjBP6K0fVhRK16Rsrm2XsZ1JZyvL7r2jHuZU1NdOWn97Lk2i93utcfIFb6/Y2sQajGuI2JGQuFdns2yGgdIC7ebl4slZ8KeXaqg0NHI81YuIaPAAO8KRVl5yuYp8lLetScBYuOp/wCIsdp85BI9Whw9VpuHcVlp0kkhjPszhrYgHS4uz1/qPRZYsLTjBGQRyPVdvrHMspud+KHCT1IaQPksWdalaq+vpBAP3sdiB4h3AJiecLG/Sa0fVb4CQeynUbguMuPyAAA2AA2ClwHCVOFvWa4NZPptAc4k+a1VhQeCNQLWTJa4gAj+U7z5KMyiQ9mn33mG/wAImJHcnE8o7rY0+E0jTAJBJ5gjfbn3S64TPWI4lT3OimXcwWAR28MKut3BplzKY/pd+pWoubcD7MHUIJpu8px2GCI6/PP3NGTlalZsc7zjYpN1SG/yNa0/ECVG4LxwXLnR1yUVfhbKgh2QpXBOCsozoEEq9pxb279LC4iTMMB2mMk+Uj49l2ZbOqQ8ubuB4qjZGYAgnHkudVvgHRpcD6gEH5H4KfZWNX6u5oY4630ntOpkaBkneVLomVbdsBe+m46nAuax5OS4EjSexiM7Eqoc/wATTyGQra+saguajy06RUe+f4A8ukegWfY6Wx94K99HG+4VW9o1qvGtLQsv9HH/AGbHDplXpuiVz19uub6Srj3D5KnfTLgQpjahcIKINUhfbPmxeeQSV/CSvWeMskhCILk0dEhCcIDCIIQiCAgnCZOg7UaxacKzo3Qdg7qnCNphWXguKigVQOSD6y6IXPWt+USw7GeILvxC11U8Lnb5cFdCnLYTOv2nPTGvtSDshqW5Wnr2g6Lj9U7Lfkzxl6lrzhcfYLQ3Vqq2pbwggtpdE5Y/UByU2kzMKc22lvcKVYra9U0zSqDJY4SP6tTT65HotNbcQY5jSKuMSHPa1wAdqjTGTBjG8clkeIVHNfjyIIBBHQg4IXe2qtI9wg9nmPmCfmliy8Wb6uupqBLmMb7xEajLiDHKXOjyVdUoA+nNTdfhAgAcgPz7nzUeoOQSJXFtsO6mUKWkYXBrFLoCFURLl5acQQcOB2I6H98lbWlYaGaZbAnkfmqq9gy34LgzizKbQ12oOAgxzS/Sxe3Vy8DcRscZPqvP6lQio6PxH81oKvHacHLz2MbrPsMlzzzJhZ+lvtufo3TikD1yrgMVP9H3/ZMHOBKumhKsE1sInGAmCdoJUVFLyku3sQnVRlkgnSXJTp0kkBBGEkkDokkkDhEEkkDhOkkg72o8YV9TGAkkt5+gz2oHMSSVHGrQBCq7m3SSWozUIUYKn0W4SSVqRRcVpNL+a40WtHVJJVE8ZEjyCYU0klAYYiYYlJJBXVnZcemypLotJJykkqIRDepRMZLSRs3JnmUklitRr/o5WhonmtS3ZJJZiujAugCZJVS0pJJIP//Z" />
        <div className="event-card-content">
          <h3 className="event-card-title">Specialist : Gastroenterologist</h3>
          <p className="event-card-description">Fees : $90</p>
          <a href="#" className="event-card-link">Read More</a>
        </div></center>
      </div>
      <div className="event-card"><center>
        <img src="data:image/jpeg;base64,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" />
        <div className="event-card-content">
          <h3 className="event-card-title">Specialist : Neurologist</h3>
          <p className="event-card-description">Fees : $90</p>
          <a href="#" className="event-card-link">Read More</a>
        </div></center>
      </div>
      
      </div>
    </div>
  );
}

export default Eventcards;
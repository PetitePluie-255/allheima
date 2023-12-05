// 1.1 准备数据，其中readStatus表示邮件状态 unread表示未读，read表示已读
let mails = [
  {
    id: 1,
    from: {
      username: 'Jack',
      avatar: './imgs/947.jpg'
    },
    time: '2023/10/1',
    content: '您好， 您之所以会收到此邮件，是因为我们正在更新 Microsoft 服务协议，该协议适用于您所使用的一个或多个 Microsoft 产品或服务。我们之所以进行这些更新，是为了阐明我们的条款并确保这些条款仍对您保持透明。',
    readStatus: 'unread'
  },
  {
    id: 2,
    from: {
      username: 'Bill',
      avatar: './imgs/68.jpg'
    },
    time: '2023/10/1',
    content: '您好， 您之所以会收到此邮件，是因为我们正在更新 Microsoft 服务协议，该协议适用于您所使用的一个或多个 Microsoft 产品或服务。我们之所以进行这些更新，是为了阐明我们的条款并确保这些条款仍对您保持透明。',
    readStatus: 'read'
  },
  {
    id: 3,
    from: {
      username: 'Kevin',
      avatar: './imgs/890.jpg'
    },
    time: '2023/10/1',
    content: '您好， 您之所以会收到此邮件，是因为我们正在更新 Microsoft 服务协议，该协议适用于您所使用的一个或多个 Microsoft 产品或服务。我们之所以进行这些更新，是为了阐明我们的条款并确保这些条款仍对您保持透明。',
    readStatus: 'unread'
  },
]

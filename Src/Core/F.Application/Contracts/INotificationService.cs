using F.Application.Notifications.Models;

namespace F.Application.Contracts
{
    public interface INotificationService
    {
        void Send(Message message);
    }
}

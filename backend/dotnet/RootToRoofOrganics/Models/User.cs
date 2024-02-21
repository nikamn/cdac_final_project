using System.ComponentModel.DataAnnotations;

public class User
{
    [Required]
    [StringLength(50, MinimumLength = 3)]
    public string FirstName { get; set; }

    [Required]
    [StringLength(50, MinimumLength = 3)]
    public string LastName { get; set; }

    [Required]
    [StringLength(50, MinimumLength = 3)]
    public string Username { get; set; }

    [Required]
    [EmailAddress]
    public string Email { get; set; }

    // Securely store password using hashing and salting
    [Required]
    public string PasswordHash { get; set; }

    // Optional: store password salt separately
    public string PasswordSalt { get; set; }


}